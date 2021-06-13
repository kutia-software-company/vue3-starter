import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'HelloWroldComponent',
    props: {
        msg: String,
    },
})
export default class HelloWorld extends Vue {
    public msg!: string;
}
