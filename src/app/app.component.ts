import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expandPanel', [
      state('collapsed', style({
        width: '300px'
      })),
      state('expanded', style({
        width: '700px'
      })),
      transition('collapsed <=> expanded', [
        animate('0.3s ease')
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease-out')
      ]),
      transition(':leave', [
        animate('0.0s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'test-trial';

  chart = new Chart({
    chart: {
      type: 'area',
      height: 160,
      width: 400
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    yAxis: {
      visible: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    series: [
      {
        name: 'Feb 1',
        type: 'area',
        data: [121, 114, 1222, 256, 411, 312]
      }
    ]
  });

  isSearchExpanded = false;
  panelStates = ['collapsed', 'collapsed', 'collapsed'];

  amountVisible = [true, true, true];

  sampleData1: any = [
    { iconPath: 'https://nazirahmed7010.github.io/drippple-sample-test/assets/stripe.png', date: new Date(), title: 'Stripe', tagButton: 'Business', value: 1223.00 },
    { iconPath: 'https://nazirahmed7010.github.io/drippple-sample-test/assets/dropbox.png', date: new Date(), title: 'Dropbox', tagButton: 'Equipment', value: -220.00 },
    { iconPath: 'https://nazirahmed7010.github.io/drippple-sample-test/assets/zendesk.png', date: new Date(), title: 'Zendesk', tagButton: 'Marketing', value: -1223.00 },
    { iconPath: 'https://nazirahmed7010.github.io/drippple-sample-test/assets/spotify.png', date: new Date(), title: 'Spotify', tagButton: 'Entertainment', value: -19.00 },
  ]

  togglePanel(index: number) {
    this.panelStates[index] = this.panelStates[index] === 'collapsed' ? 'expanded' : 'collapsed';
  }

  toggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
  }

  onMouseEnter(index: number) {
    this.amountVisible[index] = false;
  }

  onMouseLeave(index: number) {
    this.amountVisible[index] = true;
  }
}
