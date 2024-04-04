function fungsiLuar() {
    const nama = "Rendy"
    function hello() {
        console.log('Halooo!')
    }
    function fungsiDalam() {
        console.log(nama)
        hello()
        
        function dalam2 () {
        console.log(nama, 'fungsi dalam2')
        hello()
        }
        dalam2()
    }
    fungsiDalam()
}

fungsiLuar()