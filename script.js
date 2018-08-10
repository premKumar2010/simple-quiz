/**
 * @private
 * @description
 * Build the submit button and create in the dom
 */
function _buildSubmit() {
    const input = document.createElement('input');
    const typeAttribute = document.createAttribute('type');
    const valueAttribute = document.createAttribute('value');
    typeAttribute.value = 'submit';
    valueAttribute.value = 'submit answers';
    input.setAttributeNode(typeAttribute);
    input.setAttributeNode(valueAttribute);
    document.getElementById('submit').appendChild(input);
}

/**
 *
 * @param {Object[]} elements - form elements
 * @param {string []} answers - correct  answers for the question displaying
 * @returns {number}
 * @private
 * @description
 * Validate the answers selected against each question
 */
function _getMarks(elements, answers) {
    let wrightAnswers = 0;

    for (let index = 1; index <= 5; index++) {
        const value = elements['q' + index].value;
        if (value == answers[index - 1]) {
            wrightAnswers += 1;
        }
    }
    return wrightAnswers;
}

/**
 *
 * @param {number} total - number of answers are correct out of 5
 * @private
 * @description
 * Build the assessment tempate after clicking submit button
 */
function _buildResultTemplate(total) {
    const result = document.getElementById('result'), finalGrade = document.createElement('h3');
    const content = document.createTextNode(`Your final score is ${total} out of 5`);
    finalGrade.appendChild(content);
    result.appendChild(finalGrade);
}


/**
 *
 * @param form
 * @returns {boolean}
 * @description
 * Function to validate the answers and to build assesment template
 */
function validateAnswers(form) {
    const answers = ['d', 'b', 'b', 'c', 'b'], elements = document.forms[form];
    const wright = _getMarks(elements, answers);
    _buildResultTemplate(wright);
    return false;
}


/**
 * @description
 * Validate to show or hide the submit button
 * @param {object} form - form object
 */
function showSubmit(form) {
    const formElements = document.forms[form];
    let showSubmit = true;

    for (let index = 1; index <= 5; index++) {
        const value = formElements['q' + index].value;
        if ((value === null) || (value === '')) {
            showSubmit = false
        }
    }

    if (showSubmit) {
        _buildSubmit();
    }

}