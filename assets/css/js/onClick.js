
        function noStyle() {
            document.styleSheets[0].disabled = true;
            document.styleSheets[1].disabled = true;
            document.styleSheets[2].disabled = true;
            document.styleSheets[3].disabled = true;
        }
        function onStyle(n) {
            noStyle();
            document.styleSheets[n].disabled = false;
        }

        onStyle(0);
    