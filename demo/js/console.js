(function(){
    function log(){
        var string = Array.prototype.join.call(arguments, ' : ');
        console.log( string );

        var consoleDom = document.getElementById('console');

        console.log('consoleDom', consoleDom);
        if(!consoleDom){

            return;
        }
        return;

        var div = document.createElement('div');
        div.innerHTML = string.replace(/(?:\r\n|\r|\n)/g, '<br />');
        consoleDom.appendChild( div );

        consoleDom.scrollTop = consoleDom.scrollHeight;
    }

    window.log = log;
})();