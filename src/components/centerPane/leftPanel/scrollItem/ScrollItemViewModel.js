//
const scrollItemViewModel = (props, ctx) => {
    const { title, price, img, menuType, description } = props;

    const selectMenuItem = () => {
        const data = { title, price, img, menuType, description }
        ctx.setState(data);
        console.log(111);
    };

    return { selectMenuItem, };
};

export { scrollItemViewModel };