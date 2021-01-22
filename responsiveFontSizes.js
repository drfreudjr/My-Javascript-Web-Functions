/* Javascript Shell */

/* SCALE PAGE TO WINDOW WIDTH */

    // Responsive Font-sizes 

    const fontDecreaseRatio = 1;
    const menu_item_decrease_ratio = 1;
    assumed_max_screen_size= 1200;              // Starting point for doing font calculations



    function resizeFontToScreenSize (id, ratio) {

        let currentCssSize = window.getComputedStyle(document.getElementById(id)).fontSize; // gets CSS font size as string e.g. '20px'

        currentCssSize = currentCssSize.substring(0,currentCssSize.length-2);  // Remove 'px' from string
        currentCssSize = parseFloat(currentCssSize);
        // console.log(typeof(currentCssSize))
        screen_width = window.innerWidth;                   // Get current width
        console.log(screen_width);
        new_font_size = ratio * (currentCssSize/screen_width);       // Formula - initial ratio times constant
        return(new_font_size);
        }

    new_font_size = resizeFontToScreenSize("test", fontDecreaseRatio);
    console.log(new_font_size);




