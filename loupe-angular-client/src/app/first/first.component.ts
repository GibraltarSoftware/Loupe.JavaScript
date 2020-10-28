import { Component, OnInit } from '@angular/core';
import { LoupeAgentAngularService } from 'loupe-agent-angular/dist/loupe-agent-angular';
import { MethodSourceInfo } from 'loupe-agent/dist/MethodSourceInfo';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private readonly loupeAgentAngularService: LoupeAgentAngularService
  ) { }

  ngOnInit(): void {
    //console.log("First Component Loaded");
    
    this.loupeAgentAngularService.setCORSOrigin("https://localhost:44348");
    
    var someObject = {name: "matt", code: 123};
    this.loupeAgentAngularService.information(
      "JavaScript", "category", "description",
      null, null, 
      JSON.stringify(someObject), 
      new MethodSourceInfo("filename.ts", "methodName", 66)
    );

    this.loupeAgentAngularService.verbose(
      "JavaScript", "category", "description with placeholder: \r\nName: {0}\r\nCode: {1}",
      [someObject.name, someObject.code], null, 
      null, //JSON.stringify(someObject),
      new MethodSourceInfo("filename.ts", "methodName", 66)
    );

    this.loupeAgentAngularService.critical(
      "JavaScript", "category", "description with plaholder: \r\nName: {0}\r\nCode: {1}",
      [someObject.name, someObject.code], null, 
      null, //someObject,
      new MethodSourceInfo("filename.ts", "methodName", 66)
    );

    try{
      throw "wibble";
    }
    catch(err) {
      this.loupeAgentAngularService.error(
        "JavaScript", "category", "description with plaholder: \r\nName: {0}\r\nCode: {1}",
        [someObject.name, someObject.code], 
        null, //err, 
        null, //someObject,
        new MethodSourceInfo("filename.ts", "methodName", 66)
      );
    }

    try{
      throw {
        error: "wobble"
      }
    }
    catch(err) {
      this.loupeAgentAngularService.error(
        "JavaScript", "category", "description with plaholder: \r\nName: {0}\r\nCode: {1}",
        [someObject.name, someObject.code], 
        null, //err, 
        null, //someObject,
        new MethodSourceInfo("filename.ts", "methodName", 66)
      );
    }

    setTimeout((doesNotExist) => {
      doesNotExist();
    }, 5000);
  }
  
}
