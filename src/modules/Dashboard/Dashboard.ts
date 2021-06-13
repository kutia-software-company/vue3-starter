import { Options, Vue } from 'vue-class-component';
import HelloWorldComponent from '@/components/HelloWorld/index.vue';
import AdminLayout from '@/layouts/Admin/index.vue';

@Options({
    components: {
        HelloWorldComponent,
        AdminLayout,
    },
})
export default class Dashboard extends Vue {}
