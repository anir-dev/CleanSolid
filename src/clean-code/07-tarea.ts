(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor({ id, type }: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ value, placeholder }: InputAttributesProps) {
            this.value = value
            this.placeholder = placeholder;
        }
    }

    // interface InputEventProps {
    //     value: string;
    //     placeholder: string;
    //     id: string;
    // }

    class InputEvents {
        // public htmlElement: HtmlElement;
        // public inputAttributes: InputAttributes;
        // constructor({ value, placeholder, id }: InputEventProps) {
        //     this.htmlElement = new HtmlElement({ id, type: 'input' });
        //     this.inputAttributes = new InputAttributes({ value, placeholder });
        // }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement({ id, type: 'input' });
            this.attributes = new InputAttributes({ value, placeholder });
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()