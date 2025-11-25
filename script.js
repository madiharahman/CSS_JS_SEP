// =========================
// JavaScript Examples
// =========================
document.getElementById('run-js').addEventListener('click', function() {
    console.clear();

    console.log("===== Variables & Data Types =====");
    // Variables
    let fullname = "Madiha Rahman";
    console.log("fullname:", fullname);
    let age = 23;
    console.log("age:", age);
    let price = 100.5;
    console.log("price:", price);
    let x = null;
    console.log("x:", x);
    let y = undefined;
    console.log("y:", y);
    let follow = false;
    console.log("follow:", follow);
    let cityName = "Bangalore";
    console.log("cityName:", cityName);
    const PI = 3.14;
    console.log("PI:", PI);

    console.log("===== Objects & BigInt & Symbol =====");
    let big = BigInt("123");
    console.log("big:", big);
    let sym = Symbol("Hello!");
    console.log("sym:", sym);

    const student = {
        fullName: "Aman Sharma",
        age: 20,
        cgpa: 8.5,
        isPass: true
    };
    student["age"] = student["age"] + 1;
    student["name"] = "Aman Verma";
    console.log("student object:", student);

    console.log("===== Operators =====");
    let a = 5, b = 2;
    console.log("a+b =", a+b, "a-b =", a-b, "a*b =", a*b, "a/b =", a/b, "a%b =", a%b, "a**b =", a**b);

    console.log("===== Conditional Statements =====");
    if(age >= 18) console.log("You can vote"); 
    else console.log("You cannot vote");

    let mode = "dark";
    let color = mode === "dark" ? "black" : "white";
    console.log("Color based on mode:", color);

    console.log("===== Loops =====");
    for(let i=1;i<=5;i++) console.log("for loop count:", i);
    let j=1;
    do { console.log("do-while loop j=", j); j++; } while(j<1);

    let string = "itsme";
    for(let m of string) console.log("for-of:", m);

    const studentLoop = { fullName: "Aman Sharma", age: 20, cgpa: 8.5, isPass: true };
    for(let key in studentLoop) console.log("for-in:", key, studentLoop[key]);

    console.log("===== Arrays =====");
    let marks = [97,86,87,34,34];
    console.log("marks:", marks, "length:", marks.length);
    let names = ["abc","ghj","jdf","dfd"];
    for(let i=0;i<names.length;i++) console.log("names for loop:", names[i]);
    for(let name of names) console.log("names for-of:", name);

    let cities = ["delhi","bengaluru","mumbai"];
    for(let city of cities) console.log("cities for-of:", city);

    console.log("===== Array Methods =====");
    let fruits = ["grapes","apple","mango","banana","orange"];
    console.log("fruits:", fruits);
    console.log("toString():", fruits.toString());
    let newArray = cities.concat(fruits);
    console.log("concat:", newArray);
    cities.unshift("hyderabad");
    console.log("unshift:", cities);
    let val = cities.shift();
    console.log("shift:", val);
    console.log("slice(1,3):", fruits.slice(1,3));
    let arr = [1,2,3,4,5,6,7];
    arr.splice(2,2,101,102);
    console.log("splice:", arr);

    console.log("===== Functions =====");
    function myFunction(){ console.log("Welcome to Reva University"); }
    myFunction();
    function newFunction(msg){ console.log(msg); }
    newFunction("I love JS");

    function sum(x,y){ console.log(x+y); }
    sum(5,7);

    function add(a,b){ let s=a+b; return s; }
    console.log("add(3,4):", add(3,4));

    const arrowMul = (x,y) => console.log("arrowMul:", x*y);
    arrowMul(3,4);

    console.log("===== forEach, map, filter, reduce =====");
    let arrForEach = [1,2,3,4,5,6];
    arrForEach.forEach((val) => console.log("forEach:", val));

    let cityForEach = ["delhi","mumbai","bangalore"];
    cityForEach.forEach((val, idx, arr) => console.log(val.toUpperCase(), idx, arr));

    let nums = [2,3,5,6,8,4];
    let newarr = nums.map(val => val*val);
    console.log("map:", newarr);
    let evenNum = nums.filter(val => val%2===0);
    console.log("filter:", evenNum);
    let output = nums.reduce((prev, curr)=> prev+curr);
    console.log("reduce:", output);

    alert("JS code executed! Check console for outputs.");
});
