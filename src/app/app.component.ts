import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Modeler,
  OriginalPropertiesProvider,
  PropertiesPanelModule,
  InjectionNames,
  OriginalPaletteProvider,
} from './bpmn-js/bpmn-js';
import { CustomPropsProvider } from './props-provider/CustomPropsProvider';
console.log('dffff', CustomPropsProvider);

const customModdle = {
  name: 'customModdle',
  uri: 'http://example.com/custom-moddle',
  prefix: 'assignment',
  xml: {
    tagAlias: 'lowerCase',
  },
  associations: [],
  types: [
    {
      name: 'ExtUserTask',
      extends: ['bpmn:UserTask'],
      properties: [
        {
          name: 'worklist',
          isAttr: true,
          type: 'String',
        },
      ],
    },
  ],
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BPMN-Process-Modeler ';
  modeler;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.load();
    this.modeler = new Modeler({
      container: '#canvas',
      width: '100%',
      height: '600px',
      additionalModules: [
        PropertiesPanelModule,

        // Re-use original bpmn-properties-module, see CustomPropsProvider
        {
          [InjectionNames.bpmnPropertiesProvider]: [
            'type',
            OriginalPropertiesProvider.propertiesProvider[1],
          ],
        },
        { [InjectionNames.propertiesProvider]: ['type', CustomPropsProvider] },
      ],
      propertiesPanel: {
        parent: '#properties',
      },
      moddleExtension: {
        custom: customModdle,
      },
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    const url = '/assets/bpmn/initial.bpmn';
    this.http
      .get(url, {
        headers: { observe: 'response' },
        responseType: 'text',
      })
      .subscribe((x: any) => {
        console.log('Fetched XML, now importing: ', x);
        this.modeler.importXML(x, this.handleError);
      }, this.handleError);
  }

  save(): void {
    this.modeler.saveXML({ format: true }, function (err, xml) {
      var downloadURL = window.URL.createObjectURL(
        new Blob([xml], { type: 'application/bpmn20-xml' })
      );
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'diagram.bpmn';
      link.click();
    });
  }
}
