$(document).ready(function() {
    $('div').each(function () {
        let $this = $(this);
        $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
    });

    $('div span').click(
        function () {
            $(this).css('background-color', '#ffff66');
        }
    );
});