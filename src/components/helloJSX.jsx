export default {
    name: 'HelloJSX',
    props: {
        title: String,
        message: String,
    },
    data() {
        return {
            cls_title: 'text-danger h1',
            cls_message: 'text-primary h5',
        }
    },
    render(h) {
        return (
            <div class="alert alert-primary">
                <h2 class={this.cls_title}>{ this.title }</h2>
                <p class={this.cls_message}>{ this.message }</p>
            </div>
        )
    }
}