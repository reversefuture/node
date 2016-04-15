for i in [0..4]
	console.log "hello #{i}"
stdin = process.openStdin()
stdin.setEncoding 'utf8'
###
stdin.on 'data', (input) -> 
    name = input.trim() 
    process.exit() if name == 'exit' 
    console.log "Hello #{name}"
    console.log "Enter another name or 'exit' to exit"
console.log 'Enter your name'
###
square = (x) -> x*x
sum = (nums) -> nums.reduce (a,b) -> a+b
diff = (nums) -> (square sum nums) - (sum nums.map square)
console.log diff [1..100]