(function(){
    function log(){
        var string = Array.prototype.join.call(arguments, ' : ');
        console.log( string );

        var consoleDom = document.getElementById('console');
        var div = document.createElement('div');
        var textNode = document.createTextNode( string );
        div.appendChild( textNode );
        consoleDom.appendChild( div );

        consoleDom.scrollTop = consoleDom.scrollHeight;
    }

    window.log = log;
})();