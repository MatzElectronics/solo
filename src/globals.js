/*
 *   TERMS OF USE: MIT License
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a
 *   copy of this software and associated documentation files (the "Software"),
 *   to deal in the Software without restriction, including without limitation
 *   the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *   and/or sell copies of the Software, and to permit persons to whom the
 *   Software is furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFINGEMENT. IN NO EVENT SHALL
 *   THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *   DEALINGS IN THE SOFTWARE.
 */



/**
 * Global variable that holds the original version of the loaded
 * project.
 *
 * This should be updated with a current copy of the project after
 * every save and save-as operation.
 *
 * @type {{}}
 */
let projectData = null;


/**
 * The application brand name in the production system
 * @type {string}
 */
const ApplicationName = "Solo";


/**
 * The application brand name as used in the Test system
 * @type {string}
 */
const TestApplicationName = "Solocup";


/**
 * This is the name of the test ECS cluster. A matching hostname will
 * trigger a few UI changes to visually confirm that the visitor has reached
 * the test site.
 *
 * @type {string}
 */
const product_banner_host_trigger = 'solocup.parallax.com';
