$("document").ready(function(){
    
    $("#pricingComponentImage").hover(func1, func2);
    function func1()
    {
        $("#pricingComponentImage").css('opacity','70%');
    }
    function func2()
    {
        $("#pricingComponentImage").css('opacity','100%');
    }

});