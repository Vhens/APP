$(".shoppingcar .all").on("click",function(){
    //$("input[name='checkbox']").attr("checked","checked");
    if(this.checked){
        $(".list :checkbox").prop("checked",true);
    }else{
        $(".list :checkbox").prop("checked",true);
    }
})