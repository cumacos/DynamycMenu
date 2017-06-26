function menu(arr){

    this.doA = function(address)
    {
        var oBj = document.createElement("a");
        oBj.setAttribute( 'href', address );
        oBj.setAttribute( 'target', "_blank" );
        return oBj;
    }

    this.doLiA = function( tNodo, address )
    {
        this.doAtNodo = function( tNodo, address )
        {
            var oBj = doA(address);
            oBj.appendChild( document.createTextNode( tNodo ) );
            return oBj;
        }
        var oBj = document.createElement("li");
        oBj.appendChild( doAtNodo( tNodo, address ) );
        return oBj;
    }

    this.doLiASpan = function( tNodo, address )
    {
        this.doASpantNodo = function( tNodo, address )
        {
            this.doSpand = function(tNodo)
            {
                var oBj = document.createElement("span");
                oBj.appendChild( document.createTextNode( tNodo ) );
                return oBj;
            }
            var oBj = doA(address);
            oBj.appendChild( doSpand( tNodo ) );
            return oBj;
        }
        var oBj = document.createElement("li");
        oBj.appendChild(doASpantNodo( tNodo, address ) );
        return oBj;
    }


    this.hasSon = function( dad, arrSon)
    {
        var resp = false;
        for ( var i = 0; i < arrSon.length; i++ )
            if ( dad == arrSon[i][1] ) {
                resp = true;
                break;
	    }
    	return resp;
    }

    var oUl0 = document.createElement("ul");
    oUl0.id='menu';

    for ( var i = 0; i < arr[0].length; i++ )
        if (!hasSon(arr[0][i][0],arr[1]))
            oUl0.appendChild(doLiA(arr[0][i][1],arr[0][i][2]));        
        else {
            var oLi0 = doLiASpan(arr[0][i][1],'#');
            var oUl1 = document.createElement("ul");
            for ( var j = 0; j < arr[1].length; j++ )
                if ( arr[0][i][0] == arr[1][j][1] ) {
                    if ( !hasSon( arr[1][j][0],arr[2]) )
                        oUl1.appendChild( doLiA(arr[1][j][2], arr[1][j][3]) );                    
                    else {
                        var oLi1 = doLiASpan( arr[1][j][2], '#' );
                        var oUl2 = document.createElement("ul");
                        for ( var k = 0; k < arr[2].length; k++ )
                            if ( arr[1][j][0] == arr[2][k][1] ) {
                		if ( !hasSon( arr[2][k][0], arr[3]) )
                                    oUl2.appendChild( doLiA(arr[2][k][2], arr[2][k][3] ) );                                
                                else {
                                    var oLi2 = doLiASpan( arr[2][k][2], '#' );
                                    var oUl3 = document.createElement("ul");
                                    for ( var l = 0; l < arr[3].length; l++ )
                                        if ( arr[2][k][0] == arr[3][l][1] )
                                            oUl3.appendChild( doLiA(arr[3][l][2], arr[3][l][3]) );                              
                                    oLi2.appendChild(oUl3);
                                    oUl2.appendChild(oLi2);
                                }
                            }
                        oLi1.appendChild(oUl2);
                        oUl1.appendChild(oLi1);
                    }
                }
            oLi0.appendChild(oUl1);
            oUl0.appendChild(oLi0);			
        }
 
   document.getElementsByTagName('nav')[0].appendChild(oUl0);

}
