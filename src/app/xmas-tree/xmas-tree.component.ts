import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmas-tree',
  templateUrl: './xmas-tree.component.html',
  styleUrls: ['./xmas-tree.component.css']
})
export class XmasTreeComponent implements OnInit {

  enteredRows: number = 0;

  createdTree: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generateTree = () => {

    for (let i = 1; i <= this.enteredRows; i++) { // generate rows

      let treeContent: string = ''

      for (let j = 1; j <= this.enteredRows - i; j++) { // generate tree's white space on the left side
        treeContent += ' '
      }

      for (let k = 1; k <= i * 2 - 1; k++) { // generate the tree's needles
        treeContent += '*'
      }

      for (let j = i + 1; j <= this.enteredRows; j++) { // generate tree's white space on the right side
        treeContent += ' '
      }
      
      this.createdTree.push(treeContent)

    }
    // console.log(this.createdTree)
  }
}

