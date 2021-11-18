$(function () {
    $("#datepicker").datepicker();
    $("#twzipcode").twzipcode({
        zipcodeIntoDistrict: false, // 郵遞區號自動顯示在區別選單中
        css: ['addr-county', 'addr-area', 'addr-zip'], // 自訂 "城市"、"地別","郵遞區號" class 名稱 
        countyName: "city", // 自訂城市 select 標籤的 name 值
        districtName: "town" // 自訂區別 select 標籤的 name 值
    });
    $('.label').click(function () {
        $('input[name="label"]').val("");
    });

    $(".way_group_item_1").click(function () {
        $(".adders-group-big").show();
        $(".label2").show();
        $(".label").hide();
        $(this).css('background-color','#d65b04');
        $(".way_group_item_2").css('background-color','#ff8732');
    });

    $(".way_group_item_2").click(function () {
        $(".adders-group-big").show();  
        $(".label2").hide();
        $(".label").show(); 
        $(this).css('background-color','#d65b04');
        $(".way_group_item_1").css('background-color','#ff8732');
    });

});