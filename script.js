$("document").ready(function(){
    
// HOVER FUNCTIONS //    
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