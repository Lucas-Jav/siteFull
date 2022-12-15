
function createElementHtml( component, classe, txt, id  ) {
    const element = document.createElement( component )
    element.innerHTML = txt;

    if (id !== 'none') {
        element.id = id;
    }
    
    if ( classe !== 'none') {
        element.classList.add( classe );
    }

    return element;
}





export { createElementHtml }