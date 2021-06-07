import { Options, Vue } from "vue-class-component";
import HelloWorldComponent from "@/components/HelloWorld/index.vue";

@Options({
    components: {
        HelloWorldComponent,
    },
})
export default class Home extends Vue { }