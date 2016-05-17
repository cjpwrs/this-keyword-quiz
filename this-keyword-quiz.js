//1) What is the value of 'this' at Line A? Why?
//The object window, because we are in the context of the global scope

if (true) {
    // Line A
}

//2) What is the value of this at line B when obj.staticFunction() is executed? Why?
// 'this' is the obj object because that is the object on the left of the dot when staticFunction is invoked
	var obj = {
	    someData: "a string"
	};

	function myFun() {
	    // Line B
	}

	obj.staticFunction = myFun;

	obj.staticFunction();

//3) What is the value of this at line C? Why?
// 'this' is the obj object because is resides within the scope of obj

	var obj = {
	    myMethod : function () {
	        // Line C
	    }
	};
	var myFun = obj.myMethod;
	myFun();

//4) What is the value of this at line D? Why?
// 'this' is the obj object because when myFun is invoked, it is in the scope of the obj object

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
//'this' is the obj object bacause the call() method sets 'this' equal to obj

	function myFun() {
	    // Line E
	}
	var obj = {
	    someData: "a string"
	};
	myFun.call(obj);