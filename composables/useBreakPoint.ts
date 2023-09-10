import { onMounted, onUnmounted, ref, computed } from "vue";

export const useBreakPoints = () => {
    let windowWidth = ref<number | null>(null);

    const onWidthChange = () => {
        windowWidth.value = window.innerWidth;
    }

    onMounted(() => {
        if (process.client) {
            windowWidth.value = window.innerWidth;
            window.addEventListener('resize', onWidthChange);
        }

    })
    onUnmounted(() => {

        if (process.client) {
            window.removeEventListener('resize', onWidthChange);
        }

    })

    const type = computed(() => {
        if (windowWidth.value !== null) {
            if(windowWidth.value < 640) {
                return 'phone';
            }
    
            if(windowWidth.value < 768) {
                return 'tablet'
            }
    
            if(windowWidth.value < 1024) {
                return 'lg-tablet'
            }
    
            if(windowWidth.value > 1280) {
                return 'desktop'
            }
    
            return 'lg';
        }
    });

    const width = computed(() => {
        return windowWidth.value;
    })

    return {type, width};
}