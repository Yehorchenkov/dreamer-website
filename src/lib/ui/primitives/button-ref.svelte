<script>
    import { Button } from "bits-ui";
    import { twMerge } from "tailwind-merge";

    let { class: className, href, text, external = false } = $props();
</script>

<Button.Root
    href={href}
    class={twMerge("items-center text-blue-600 hover:underline", className)}
>
    {text}
</Button.Root>
