<script>
    import { Dialog } from 'bits-ui';
    import { fade, fly } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    let {
        open = $bindable(false),
        side = 'right',
        title,
        description,
        trigger,
        footer,
        children,
        closeOnOutsideClick = true,
        closeOnEscape = true,
        preventScroll = true,
        scrollBody = true,
        showCloseButton = true,
        swipeEnabled = false,
        swipeOpenFromEdge = false,
        swipeThreshold = 64,
        swipeEdgeZone = 28,
        swipeAxisRatio = 1.25,
        overlayClass = '',
        contentClass = '',
        bodyClass = '',
        headerClass = '',
        footerClass = ''
    } = $props();

    const SNAP_BACK_TRANSITION = 'transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)';
    const SNAP_BACK_DURATION = 250;

    const SIDE_CONFIG = {
        left: {
            panelClass: 'inset-y-0 left-0 h-full w-3/4 max-w-md border-r',
            fly: { x: '-100%', y: 0, duration: 220 },
            swipe: {
                edge: (touch, edgeZone) => touch.clientX <= edgeZone,
                open: (deltaX) => deltaX > 0,
                close: (deltaX) => deltaX < 0,
                clamp: (deltaX) => Math.min(0, deltaX)
            }
        },
        right: {
            panelClass: 'inset-y-0 right-0 h-full w-3/4 max-w-md border-l',
            fly: { x: '100%', y: 0, duration: 220 },
            swipe: {
                edge: (touch, edgeZone) => touch.clientX >= window.innerWidth - edgeZone,
                open: (deltaX) => deltaX < 0,
                close: (deltaX) => deltaX > 0,
                clamp: (deltaX) => Math.max(0, deltaX)
            }
        },
        top: {
            panelClass: 'inset-x-0 top-0 w-full max-h-[85vh] border-b',
            fly: { x: 0, y: '-100%', duration: 220 }
        },
        bottom: {
            panelClass: 'inset-x-0 bottom-0 w-full max-h-[85vh] border-t',
            fly: { x: 0, y: '100%', duration: 220 }
        }
    };

    let edgeSwipeStart = $state(null);

    const sideConfig = $derived(SIDE_CONFIG[side] ?? SIDE_CONFIG.right);
    const swipeConfig = $derived(sideConfig.swipe ?? null);
    const canSwipe = $derived(Boolean(swipeEnabled && swipeConfig));
    const hasHeader = $derived(Boolean(title || description || showCloseButton));

    const overlayClasses = $derived(
        twMerge('fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px]', overlayClass)
    );

    const contentClasses = $derived(
        twMerge(
            'fixed z-50 flex flex-col bg-background text-foreground shadow-2xl outline-none border-border',
            sideConfig.panelClass,
            canSwipe ? 'touch-pan-y' : '',
            contentClass
        )
    );

    const headerClasses = $derived(
        twMerge(
            'flex items-start justify-between gap-4 border-b border-border px-5 py-4',
            headerClass
        )
    );

    const bodyClasses = $derived(
        twMerge('flex-1 px-5 py-4', scrollBody ? 'overflow-y-auto' : '', bodyClass)
    );

    const footerClasses = $derived(
        twMerge('border-t border-border px-5 py-4', footerClass)
    );

    function isHorizontalSwipe(deltaX, deltaY) {
        return (
            Math.abs(deltaX) >= swipeThreshold &&
            Math.abs(deltaX) > Math.abs(deltaY) * swipeAxisRatio
        );
    }

    function handleEdgeTouchStart(event) {
        if (!canSwipe || !swipeOpenFromEdge || open || event.touches.length !== 1) return;

        const touch = event.touches[0];
        if (!swipeConfig.edge(touch, swipeEdgeZone)) return;

        edgeSwipeStart = { x: touch.clientX, y: touch.clientY };
    }

    function handleEdgeTouchEnd(event) {
        if (!edgeSwipeStart || !swipeConfig) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - edgeSwipeStart.x;
        const deltaY = touch.clientY - edgeSwipeStart.y;
        edgeSwipeStart = null;

        if (isHorizontalSwipe(deltaX, deltaY) && swipeConfig.open(deltaX)) {
            open = true;
        }
    }

    function resetEdgeSwipe() {
        edgeSwipeStart = null;
    }

    function swipeableDrawer(node) {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let isScrolling = null;
        let resetTimer = null;

        function clearResetTimer() {
            if (resetTimer) {
                clearTimeout(resetTimer);
                resetTimer = null;
            }
        }

        function resetTransition() {
            clearResetTimer();
            node.style.transition = '';
        }

        function snapBack() {
            node.style.transform = '';
            node.style.transition = SNAP_BACK_TRANSITION;
            clearResetTimer();

            resetTimer = window.setTimeout(() => {
                node.style.transition = '';
                resetTimer = null;
            }, SNAP_BACK_DURATION);
        }

        function onTouchStart(event) {
            if (!canSwipe || !open || !swipeConfig || event.touches.length !== 1) return;

            const touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            isDragging = true;
            isScrolling = null;

            clearResetTimer();
            node.style.transition = 'none';
        }

        function onTouchMove(event) {
            if (!isDragging || !swipeConfig) return;

            const touch = event.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            if (isScrolling === null) {
                isScrolling = Math.abs(deltaY) > Math.abs(deltaX);
            }

            if (isScrolling) return;

            if (event.cancelable) {
                event.preventDefault();
            }

            node.style.transform = `translate3d(${swipeConfig.clamp(deltaX)}px, 0, 0)`;
        }

        function onTouchEnd(event) {
            if (!isDragging || !swipeConfig) return;

            isDragging = false;

            if (isScrolling) {
                isScrolling = null;
                resetTransition();
                return;
            }

            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            if (isHorizontalSwipe(deltaX, deltaY) && swipeConfig.close(deltaX)) {
                resetTransition();
                open = false;
                return;
            }

            snapBack();
        }

        function onTouchCancel() {
            if (!isDragging) return;
            isDragging = false;
            snapBack();
        }

        node.addEventListener('touchstart', onTouchStart, { passive: true });
        node.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('touchcancel', onTouchCancel);

        return {
            destroy() {
                clearResetTimer();
                node.removeEventListener('touchstart', onTouchStart);
                node.removeEventListener('touchmove', onTouchMove);
                window.removeEventListener('touchend', onTouchEnd);
                window.removeEventListener('touchcancel', onTouchCancel);
            }
        };
    }
</script>

<svelte:window
    ontouchstart={handleEdgeTouchStart}
    ontouchend={handleEdgeTouchEnd}
    ontouchcancel={resetEdgeSwipe}
/>

<Dialog.Root bind:open>
    {#if trigger}
        <Dialog.Trigger>
            {@render trigger()}
        </Dialog.Trigger>
    {/if}

    <Dialog.Portal>
        <Dialog.Overlay forceMount>
            {#snippet child({ props })}
                {#if open}
                    <div
                        {...props}
                        class={overlayClasses}
                        transition:fade={{ duration: 160 }}
                    ></div>
                {/if}
            {/snippet}
        </Dialog.Overlay>

        <Dialog.Content
            forceMount
            preventScroll={preventScroll}
            escapeKeydownBehavior={closeOnEscape ? 'close' : 'ignore'}
            interactOutsideBehavior={closeOnOutsideClick ? 'close' : 'ignore'}
        >
            {#snippet child({ props })}
                {#if open}
                    <div
                        {...props}
                        use:swipeableDrawer
                        class={contentClasses}
                        transition:fly={sideConfig.fly}
                    >
                        {#if hasHeader}
                            <header class={headerClasses}>
                                <div class="min-w-0 flex-1">
                                    {#if title}
                                        <Dialog.Title class="text-base font-semibold leading-6 sm:text-lg">
                                            {@render title()}
                                        </Dialog.Title>
                                    {/if}

                                    {#if description}
                                        <Dialog.Description class="mt-1 text-sm text-muted-foreground">
                                            {@render description()}
                                        </Dialog.Description>
                                    {/if}
                                </div>

                                {#if showCloseButton}
                                    <Dialog.Close
                                        class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        aria-label="Close drawer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-4 w-4"
                                            aria-hidden="true"
                                        >
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </Dialog.Close>
                                {/if}
                            </header>
                        {/if}

                        <div class={bodyClasses}>
                            {@render children?.()}
                        </div>

                        {#if footer}
                            <footer class={footerClasses}>
                                {@render footer()}
                            </footer>
                        {/if}
                    </div>
                {/if}
            {/snippet}
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>