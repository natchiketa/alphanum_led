
/* This array maps any supplied character to the corresponding LED elements needed to display it. Not the most
   computationally effiecient manner to do it, but the goal here is to do it in a human-readable way, and thus
   more easily extendable to those who wish to add more characters.

   I've established the code style convention of arranging the values of the 'elements' keys so that they actually
   look like the LED display.

   Copy the template below and replace the unneeded characters with spaces. Ideally you'll be able to put your text
   editor in "overwrite mode" so you can just go nuts with that space bar.

   NOTES:

   * If you happen to make a character that's already here, it'll of course use whichever one comes first.
   * Of course, the backslash is the escape operator, so the aesthetically regrettable alternative is that
     we instead use a lowercase L.
   * The period/decimal and the top-left dot is handled separately to keep from always having to clear that out
     here. Already taken care of, folks.

   Characters based on this font set: http://i.imgur.com/vsXiY.jpg

 */

var LED_CHARACTERS = [
/*,

    {
        char: '__CHAR__',
        elements:

            ' - - ' +
            '|l|/|' +
            ' - - ' +
            '|/|l|' +
            ' - - '

    }

*/
    {
        char: '0',
        elements:

            ' - - ' +
            '|   |' +
            '|   |' +
            ' - - '

    },

    {
        char: '1',
        elements:

            '     ' +
            '   /|' +
            '     ' +
            '    |' +
            '     '

    },

    {
        char: '2',
        elements:

            ' - - ' +
            '    |' +
            ' - - ' +
            '|    ' +
            ' - - '

    },

    {
        char: '3',
        elements:

            ' - - ' +
            '    |' +
            '   - ' +
            '    |' +
            ' - - '

    },

    {
        char: '4',
        elements:

            '     ' +
            '|   |' +
            ' - - ' +
            '    |' +
            '     '

    },

    {
        char: '__CHAR__',
        elements:

            ' - - ' +
            '|    ' +
            ' - - ' +
            '    |' +
            ' - - '

    },

    {
        char: '6',
        elements:

            ' - - ' +
            '|    ' +
            ' - - ' +
            '|   |' +
            ' - - '

    },

    {
        char: '7',
        elements:

            ' - - ' +
            '   / ' +
            '     ' +
            '  |  ' +
            '     '

    },

    {
        char: '8',
        elements:

            ' - - ' +
            '|   |' +
            ' - - ' +
            '|   |' +
            ' - - '

    },

    {
        char: '9',
        elements:

            ' - - ' +
            '|   |' +
            ' - - ' +
            '    |' +
            '     '

    },

    {
        char: '__CHAR__',
        elements:

            ' - - ' +
            '|l|/|' +
            ' - - ' +
            '|/|l|' +
            ' - - '
    }
];

var LED_ELEMENTMAP = {
    anl_htop1:  1,
    anl_htop2:  3,
    anl_vtop1:  5,
    anl_dtop1:  6,
    anl_vtop2:  7,
    anl_dtop2:  8,
    anl_vtop3:  9,
    anl_hmid1: 11,
    anl_hmid2: 13,
    anl_vbot1: 15,
    anl_dbot1: 16,
    anl_vbot2: 17,
    anl_dbot2: 18,
    anl_vbot3: 19,
    anl_hbot1: 21,
    anl_hbot2: 23
}

/*

* */

function setDisplay(dispChar, selector) {
    /* Takes character dispChar amd matches it with a character in LED_CHARACTERS. If it doesn't find the character
     * the last character is used (all elements on).
     *
     * selector: TODO
     *
     * */


    selector = (typeof selector == "undefined") ? $('.anled').last().find('.alphanum_led').last() : selector;

    var renderedChar = false;

    $.each(LED_CHARACTERS, function (charIndex, charValue) {

        if ( (dispChar == charValue.char || charValue.char == '__CHAR__') && !renderedChar ) {

            $.each(LED_ELEMENTMAP, function (elementIndex, elementValue) {

                // for the .led_elem block, classes should be .on or .off
                $('.led_elem .' + elementIndex, selector)
                    .removeClass('on off')
                    .addClass( (charValue.elements[elementValue] != ' ') ? "on" : "off" );

                // for the .led_glow block, classes should be glow or nothing
                $('.led_glow .' + elementIndex, selector)
                    .removeClass('glow')
                    .addClass( (charValue.elements[elementValue] != ' ') ? "glow" : "" );

                renderedChar = true;

            });

        }

    });

 }


$(document).ready(function () {

});