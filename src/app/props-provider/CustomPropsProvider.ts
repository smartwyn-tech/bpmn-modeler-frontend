import {
  EntryFactory,
  IPropertiesProvider,
  OriginalPropertiesProvider,
} from '../bpmn-js/bpmn-js';

export class CustomPropsProvider implements IPropertiesProvider {
  static $inject = ['translate', 'bpmnPropertiesProvider'];

  // Note that names of arguments must match injected modules, see InjectionNames.
  constructor(private translate, private bpmnPropertiesProvider) {}

  getTabs(element) {
    console.log(this.constructor.name, 'Creating property tabs', element.type);
    if (element.type == 'bpmn:UserTask') {
      return this.bpmnPropertiesProvider.getTabs(element).concat(
        {
          id: 'assignment',
          label: this.translate('Assignment'),
          groups: [
            {
              id: 'owner',
              label: this.translate('Owner'),
              entries: [
                EntryFactory.textBox({
                  id: 'owner',
                  label: this.translate('Owner'),
                  modelProperty: 'owner',
                }),
              ],
            },
            {
              id: 'assignee',
              label: this.translate('Assignee'),
              entries: [
                EntryFactory.textBox({
                  id: 'assignee',
                  label: this.translate('Assignee'),
                  modelProperty: 'assignee',
                }),
              ],
            },
            {
              id: 'candidateUsers',
              label: this.translate('Candidate Users'),
              entries: [
                EntryFactory.textBox({
                  id: 'candidateUsers',
                  label: this.translate('CandidateUsers'),
                  modelProperty: 'candidateUsers',
                }),
              ],
            },
            {
              id: 'candidateGroups',
              label: this.translate('Candidate Groups'),
              entries: [
                EntryFactory.textBox({
                  id: 'candidateGroups',
                  label: this.translate('CandidateGroups'),
                  modelProperty: 'candidateGroups',
                }),
              ],
            },
            {
              id: 'participantUsers',
              label: this.translate('Participant Users'),
              entries: [
                EntryFactory.textBox({
                  id: 'participantUsers',
                  label: this.translate('ParticipantUsers'),
                  modelProperty: 'participantUsers',
                }),
              ],
            },
            {
              id: 'participantGroups',
              label: this.translate('Participant Groups'),
              entries: [
                EntryFactory.textBox({
                  id: 'participantGroups',
                  label: this.translate('ParticipantGroups'),
                  modelProperty: 'participantGroups',
                }),
              ],
            },
            {
              id: 'watcherUsers',
              label: this.translate('Watcher Users'),
              entries: [
                EntryFactory.textBox({
                  id: 'watcherUsers',
                  label: this.translate('WatcherUsers'),
                  modelProperty: 'watcherUsers',
                }),
              ],
            },
            {
              id: 'watcherGroups',
              label: this.translate('Watcher Groups'),
              entries: [
                EntryFactory.textBox({
                  id: 'watcherGroups',
                  label: this.translate('WatcherGroups'),
                  modelProperty: 'watcherGroups',
                }),
              ],
            },
          ],
        },
        {
          id: 'details',
          label: this.translate('Details'),
          groups: [
            {
              id: 'validateFormFields',
              label: this.translate('Validate Form Fields'),
              entries: [
                EntryFactory.checkbox({
                  id: 'validateFormFields',
                  description:
                    'If the form is submitted and validate form fields expression evaluates to true, form fields are validated on the back-end according to the form model restrictions.',
                  label: this.translate('ValidateFormFields'),
                  modelProperty: 'validateFormFields',
                }),
              ],
            },
            {
              id: 'taskListener',
              label: this.translate('Task Listener'),
              entries: [
                EntryFactory.textBox({
                  id: 'taskListener',
                  label: this.translate('TaskListener'),
                  modelProperty: 'taskListener',
                }),
              ],
            },
            {
              id: 'asynchronous',
              label: this.translate('Asynchronous'),
              entries: [
                EntryFactory.checkbox({
                  id: 'asynchronous',
                  label: this.translate('Asynchronous'),
                  modelProperty: 'asynchronous',
                }),
              ],
            },
            {
              id: 'executionListeners',
              label: this.translate('Execution Listeners'),
              entries: [
                EntryFactory.textBox({
                  id: 'executionListeners',
                  label: this.translate('ExecutionListeners'),
                  modelProperty: 'executionListeners',
                }),
              ],
            },
            {
              id: 'priority',
              label: this.translate('Priority'),
              entries: [
                EntryFactory.textBox({
                  id: 'priority',
                  label: this.translate('Priority'),
                  modelProperty: 'priority',
                }),
              ],
            },
            {
              id: 'dueDate',
              label: this.translate('Due Date'),
              entries: [
                EntryFactory.textBox({
                  id: 'dueDate',
                  label: this.translate('DueDate'),
                  modelProperty: 'dueDate',
                }),
              ],
            },
            {
              id: 'skipExpression',
              label: this.translate('Skip Expression'),
              entries: [
                EntryFactory.textBox({
                  id: 'skipExpression',
                  description:
                    'Defines an expression which is evaluated before executing the task. If it evaluates to true, the task is skipped.',
                  label: this.translate('SkipExpression'),
                  modelProperty: 'skipExpression',
                }),
              ],
            },
            {
              id: 'skipExpression',
              label: this.translate('Skip Expression'),
              entries: [
                EntryFactory.textBox({
                  id: 'skipExpression',
                  label: this.translate('SkipExpression'),
                  modelProperty: 'skipExpression',
                }),
              ],
            },
            {
              id: 'isForCompensation',
              label: this.translate('Is For Compensation'),
              entries: [
                EntryFactory.checkbox({
                  id: 'isForCompensation',
                  label: this.translate('IsForCompensation'),
                  modelProperty: 'isForCompensation',
                }),
              ],
            },
          ],
        },
        {
          id: 'multiInstance',
          label: this.translate('MultiInstance'),
          groups: [
            {
              id: 'multiInstanceType',
              label: this.translate('Multi Instance Type'),
              entries: [
                EntryFactory.textBox({
                  id: 'multiInstanceType',
                  label: this.translate('MultiInstanceType'),
                  modelProperty: 'multiInstanceType',
                }),
              ],
            },
          ],
        },
        {
          id: 'visual',
          label: this.translate('Visual'),
          groups: [
            {
              id: 'fontWeight',
              label: this.translate('Font Weight'),
              entries: [
                EntryFactory.textBox({
                  id: 'fontWeight',
                  label: this.translate('FontWeight'),
                  modelProperty: 'fontWeight',
                }),
              ],
            },
            {
              id: 'fontSize',
              label: this.translate('Font Size'),
              entries: [
                EntryFactory.textBox({
                  id: 'fontSize',
                  label: this.translate('FontSize'),
                  modelProperty: 'fontSize',
                }),
              ],
            },
            {
              id: 'fontColor',
              label: this.translate('Font Color'),
              entries: [
                EntryFactory.textBox({
                  id: 'fontColor',
                  label: this.translate('FontColor'),
                  modelProperty: 'fontColor',
                }),
              ],
            },
            {
              id: 'fontStyle',
              label: this.translate('Font Style'),
              entries: [
                EntryFactory.textBox({
                  id: 'fontStyle',
                  label: this.translate('FontStyle'),
                  modelProperty: 'fontStyle',
                }),
              ],
            },
            {
              id: 'backgroundColor',
              label: this.translate('Background Color'),
              entries: [
                EntryFactory.textBox({
                  id: 'backgroundColor',
                  label: this.translate('BackgroundColor'),
                  modelProperty: 'backgroundColor',
                }),
              ],
            },
            {
              id: 'borderColor',
              label: this.translate('Border Color'),
              entries: [
                EntryFactory.textBox({
                  id: 'borderColor',
                  label: this.translate('BorderColor'),
                  modelProperty: 'borderColor',
                }),
              ],
            },
          ],
        }
      );
    } else if (element.type == 'bpmn:StartEvent') {
      return this.bpmnPropertiesProvider.getTabs(element).concat({
        id: 'custom',
        label: this.translate('Custom'),
        groups: [
          {
            id: 'executionListeners',
            label: this.translate('Execution Listeners'),
            entries: [
              EntryFactory.textBox({
                id: 'executionListeners',
                label: this.translate('ExecutionListeners'),
                modelProperty: 'executionListeners',
              }),
            ],
          },
          {
            id: 'initiator',
            label: this.translate('Initiator'),
            entries: [
              EntryFactory.textBox({
                id: 'initiator',
                label: this.translate('Initiator'),
                modelProperty: 'initiator',
              }),
            ],
          },
          {
            id: 'formKey',
            label: this.translate('Form Key'),
            entries: [
              EntryFactory.textBox({
                id: 'formKey',
                label: this.translate('FormKey'),
                modelProperty: 'formKey',
              }),
            ],
          },
          {
            id: 'validateFormFields',
            label: this.translate('Validate Form Fields'),
            entries: [
              EntryFactory.checkbox({
                id: 'validateFormFields',
                label: this.translate('ValidateFormFields'),
                modelProperty: 'validateFormFields',
              }),
            ],
          },
        ],
      });
    } else if (element.type == 'bpmn:EndEvent') {
      return this.bpmnPropertiesProvider.getTabs(element).concat({
        id: 'custom',
        label: this.translate('Custom'),
        groups: [
          {
            id: 'executionListeners',
            label: this.translate('Execution Listeners'),
            entries: [
              EntryFactory.textBox({
                id: 'executionListeners',
                label: this.translate('ExecutionListeners'),
                modelProperty: 'executionListeners',
              }),
            ],
          },
        ],
      });
    } else {
      return this.bpmnPropertiesProvider.getTabs(element).concat({
        id: 'default',
      });
    }
  }
}
