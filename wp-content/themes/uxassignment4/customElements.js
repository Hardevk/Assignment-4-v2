class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class HardevWasHere extends HTMLElement {
	connectedCallback(){
		this.innerHTML = "Hardev was here";
	}
}
customElements.define('x-hradev', HardevWasHere)