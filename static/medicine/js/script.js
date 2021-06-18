window.addEventListener("load" , function (){

    console.log("hello");


    $("#search_button").on("click", function(){ 
        //TODO:Ajaxで検索させる
        required_search() 
    });
    //document.on(".stack","click",function(){ console.log( $(this).val() ); });
    $(".stack").on("click",function(){ 
        //TODO:Ajaxでスタックさせる
        console.log( $(this).val() );
    });

});

function required_search(){
    console.log($("#search_text").val());
}

