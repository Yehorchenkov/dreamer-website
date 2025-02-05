<script>
    import { page } from '$app/state';
    import { Button } from 'bits-ui';
</script>

<div class="grid h-screen place-content-center px-4">
    <div class="text-center">
        <h1 class="text-9xl font-bold text-primary">{page.status}</h1>
        <p class="text-lg mb-6">{page.error.message}</p>
        <Button.Root href="/" class="text-blue-600 dark:text-blue-500 hover:underline">
            Go back to home
        </Button.Root>
    </div>
</div>