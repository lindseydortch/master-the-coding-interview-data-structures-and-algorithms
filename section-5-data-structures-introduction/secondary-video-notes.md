# Secondary Videos 

## Registers and RAM: Crash Course Computer Science #6 
- Uses a And-Or Latch 
  - Has two inputs 
    - "Set" input which sets the output to a 1 
    - "Reset" input which sets the out put 0 
  - If set and resets are both 0, the circuit just outputs whatever was last put in it 
    - In other words, it remembers a single bit of information - Memory 
  - This is called a latch because it "latches onto" a particular value and stays that way 
  - The action of putting data into memory is called writing, whereas getting the data out is called reading  
- Gated latch - called this because the gate can be opened or closed 
  - Gated latch goes into a box to add a level of abstraction 
- We're not restricted to just one latch 
  - A group of latches operating like this is called a register, which holds a single number, and the number of bits in a register is called its width 
- 8-Bit Register 
  - D - Data In 
  - E - Write Enable 
  - Q - Data Quit 
- 16 x 16 latch matrix 
  - We want a the intersection of the latch we need 
- Memory Address - we need a way to uniquely specify each intersection 
- 12=1100 and 8=1000 - 11001000 would be our address 
- The way that modern computers scale to megabytes and gigabytes of memory is they keep packaging and packaging up little bundles of memory into larger and larger arrangements 
  - 8 bits hold enough numbers to provide addresses for 256 bytes of our memory, but thats all 
    - To address a gigabyte or a billion bytes of memory - we need 32-bit addresses 
    - We can access memory at any time - this is RAM 
- SRAM - Static Random Access Memory which uses latches
  - There are other types of memory like DRAM, etc. 