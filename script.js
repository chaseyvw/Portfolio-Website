$("document").ready(function(){

// FIREFLY ANIMATIONS //
    $.firefly({
        on:'header',
        total: 90,
        ofTop: 0,
        ofLeft: 0,
        twinkle: 0.2,
        minPixel: 1,
        maxPixel: 5,
        color: '#E4DFDA',
        namespace: 'jqueryFireFly',
        zIndex: Math.ceil(Math.random() * 20) - 1,
        _paused: false
    });

// HOVER FUNCTIONS //    
    // PROJECTS //
    // PRICING COMPONENT //
    $("#pricingComponentImage").mouseenter(function func(){
        $("#pricingComponentImage").css('opacity', '50%');
        $("#pricingComponentTitle").css('color', '#E4DFDA');
    });

    $("#pricingComponentImage").mouseleave(function func(){
        $("#pricingComponentImage").css('opacity', '100%');
        $("#pricingComponentTitle").css('color', 'transparent');
    });
    // FLORIST WEBSITE //
    $("#floristWebsiteImage").mouseenter(function func(){
        $("#floristWebsiteImage").css('opacity', '50%');
        $("#FloristTitle").css('color', '#E4DFDA');
    });

    $("#floristWebsiteImage").mouseleave(function func(){
        $("#floristWebsiteImage").css('opacity', '100%');
        $("#FloristTitle").css('color', 'transparent');
    });
    // PRODUCT PAGE //
    $("#productPageImage").mouseenter(function func(){
        $("#productPageImage").css('opacity', '50%');
        $("#productPageTitle").css('color', '#E4DFDA');
    });

    $("#productPageImage").mouseleave(function func(){
        $("#productPageImage").css('opacity', '100%');
        $("#productPageTitle").css('color', 'transparent');
    });

    // LANGUAGES //
    // HTML //
    $("#HTMLImage").mouseenter(function func(){
        $("#HTMLImage").css('opacity', '50%');
        $("#HTMLTitle").css('color', '#E4DFDA');
    });

    $("#HTMLImage").mouseleave(function func(){
        $("#HTMLImage").css('opacity', '100%');
        $("#HTMLTitle").css('color', 'transparent');
    });
    // CSS //
    $("#CSSImage").mouseenter(function func(){
        $("#CSSImage").css('opacity', '50%');
        $("#CSSTitle").css('color', '#E4DFDA');
    });

    $("#CSSImage").mouseleave(function func(){
        $("#CSSImage").css('opacity', '100%');
        $("#CSSTitle").css('color', 'transparent');
    });
    // JAVASCRIPT //
    $("#JavaScriptImage").mouseenter(function func(){
        $("#JavaScriptImage").css('opacity', '50%');
        $("#JavaScriptTitle").css('color', '#E4DFDA');
    });

    $("#JavaScriptImage").mouseleave(function func(){
        $("#JavaScriptImage").css('opacity', '100%');
        $("#JavaScriptTitle").css('color', 'transparent');
    });
    // PYTHON //
    $("#PythonImage").mouseenter(function func(){
        $("#PythonImage").css('opacity', '50%');
        $("#PythonTitle").css('color', '#E4DFDA');
    });

    $("#PythonImage").mouseleave(function func(){
        $("#PythonImage").css('opacity', '100%');
        $("#PythonTitle").css('color', 'transparent');
    });
    // C# //
    $("#CSharpImage").mouseenter(function func(){
        $("#CSharpImage").css('opacity', '50%');
        $("#CSharpTitle").css('color', '#E4DFDA');
    });

    $("#CSharpImage").mouseleave(function func(){
        $("#CSharpImage").css('opacity', '100%');
        $("#CSharpTitle").css('color', 'transparent');
    });

});