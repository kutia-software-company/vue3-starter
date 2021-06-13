import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'SidebarComponent',
})
export default class Sidebar extends Vue {
    public appName = process.env.VUE_APP_NAME;
}
