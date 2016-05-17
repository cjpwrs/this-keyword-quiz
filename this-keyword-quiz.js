//1) What is the value of 'this' at Line A? Why?

if (true) {
    // Line A
}

//2) What is the value of this at line B when obj.staticFunction() is executed? Why?

	var obj = {
	    someData: "a string"
	};

	function myFun() {
	    // Line B
	}

	obj.staticFunction = myFun;

	obj.staticFunction();

//3) What is the value of this at line C? Why?

	var obj = {
	    myMethod : function () {
	        // Line C
	    }
	};
	var myFun = obj.myMethod;
	myFun();

//4) What is the value of this at line D? Why?

	function myFun() {
    // Line D
	}
	var obj = {
	    myMethod : function () {
	        eval("myFun()");
	    }
	};
	obj.myMethod();

//5) What is the value of this at line E?

	function myFun() {
	    // Line E
	}
	var obj = {
	    someData: "a string"
	};
	myFun.call(obj);