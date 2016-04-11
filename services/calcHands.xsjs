	//Format function for JSON	
	function createJSONEntry(rs) {
	      return {
	            "RANK" : rs.getString(1),
	            "C1" : rs.getString(2),
	            "C2" : rs.getString(3),
	            "C3" : rs.getString(4),
	            "C4" : rs.getString(5),
	            "C5" : rs.getString(6),
	            "DESCRIPTION" : rs.getString(7),
	            "AMOUNT" : rs.getInteger(8)
	      };
	
	}
	
	//Get the cards from the request
	var hand1 = $.request.parameters.get('h1'); 
	var hand2 = $.request.parameters.get('h2');
	var flop1  = $.request.parameters.get('f1');
	var flop2 = $.request.parameters.get('f2');
	var flop3 = $.request.parameters.get('f3');
	var turn = $.request.parameters.get('t');
	var river = $.request.parameters.get('r');
	
	//Check if the parameter is passed, if not
	//then get all values which is 1
	if(!hand1){
		hand1 = 1;
	}
	
	// ******* STATEMENT ********
	// SELECT * FROM "_SYS_BIC"."I027737.Poker/POSSHANDS" ('PLACEHOLDER' = ('$$MYHANDPID$$', '8'))
	var sql = "SELECT * FROM \"_SYS_BIC\".\"I027737.Poker/POSSHANDS\"" + 
				" (\'PLACEHOLDER\' = (\'$$MYHANDPID$$\', \'" + hand1 + "\'))";
	
	var conn = $.db.getConnection();
	var pstmt = conn.prepareStatement(sql);
		
    var rs = pstmt.executeQuery();  

    var list = [];
    while (rs.next()) {
        list.push(createJSONEntry(rs));
    }
    var body = JSON.stringify({"hands" : list});
 
    //JSON body
    $.response.contentType = "text/JSON";   
    $.response.setBody(body);  
      
    // cleanup  
    rs.close();  
    pstmt.close();  
    conn.close();  
		

	
	