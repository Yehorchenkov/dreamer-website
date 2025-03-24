<script>
    import { Button } from "bits-ui";
    import { twMerge } from "tailwind-merge";

    let { class: className, href, text } = $props();
</script>

<Button.Root 
    href={href}
    class={twMerge("text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5", className)}
>
    {text}
</Button.Root>