    function dynamicFontSize (originalFontSize = 55, originalCanvsSize = 1360) { // in design params/out adjusted font size
        percentOfFullSize = innerWidth/originalCanvsSize                                
        adjustedLinearFontSize = originalFontSize*percentOfFullSize                     //linear trnsform
        adjustedNonlinearFontSize = originalFontSize /(1-Math.log(percentOfFullSize))   //nonlinear transform

        cl(adjustedLinearFontSize, adjustedNonlinearFontSize)
        return(adjustedNonlinearFontSize)
    }