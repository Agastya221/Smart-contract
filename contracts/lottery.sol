// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
//   constructor (){
//         owner = payable(msg.sender);
//     }
//     modifier onlyowner{
//         require(msg.sender == owner, "not");
//         _;
//     }
    
contract lottery {

    uint256 private Fund;
    address[] public funderslist;
    address owner;
    constructor() {
        owner = payable(msg.sender); 
    }     
    modifier onlyOwner {
        require(owner == msg.sender,"you are not the owner");
        _;
    } 

    function addFund() public payable{
        require(msg.value > Fund, "Not enough Eth");
        funderslist.push(msg.sender);

    }

    function withdraw()  public payable onlyOwner{
        (bool callSuccess, ) = owner.call{value:address(this).balance}("");
        require(callSuccess,"Not the owner!");
        
    }
} 