$("document").ready(function(){
    
    $("#pricingComponentImage").hover(pricingImage1, pricingImage2);
    function pricingImage1()
    {
        $("#pricingComponentImage").css('opacity','30%');
    }
    function pricingImage2()
    {
        $("#pricingComponentImage").css('opacity','100%');
    }
    

    $("#HTMLImage").hover(HTMLImage1, HTMLImage2);
    function HTMLImage1()
    {
        $("#HTMLImage").css('opacity','30%');
    }
    function HTMLImage2()
    {
        $("#HTMLImage").css('opacity','100%');
    }

});