class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(body, title) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = title.value;
        li.append(h4); // appendChild can't add string in Typescript
        const p = document.createElement("p");
        p.innerText = body.format();
        li.append(p);
        this.container.append(li);
    }
}
export default ListTemplate;
