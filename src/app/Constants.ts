import {SelectObject} from './dataClasses';

export const INTERRUPTION_FREQUENCY: SelectObject[] = [
  {value: '0', viewValue: 'Less Than 5%'},
  {value: '1', viewValue: 'Less Than 10%'},
  {value: '2', viewValue: 'Less Than 15%'},
  {value: '3', viewValue: 'Less Than 20%'},
  {value: '4', viewValue: 'All'},
];

export const NETWORK_PERFORMANCE: SelectObject[] = [
  {value: '0', viewValue: 'Any Network Performance'},
  {value: '1', viewValue: 'Low (Up to 15 Gigabit)'},
  {value: '2', viewValue: 'Moderate (Up to 25 Gigabit)'},
  {value: '3', viewValue: 'High (above 25 Gigabit)'},
];


export const OS: SelectObject[] = [
    {value: 'linux', viewValue: 'Linux'},
    {value: 'windows', viewValue: 'Windows'}
  ];
export const AWSREGIONS: SelectObject[] = [
    {value: 'us-east-2', viewValue: 'US East (Ohio)'},
    {value: 'us-east-1', viewValue: 'US East (N. Virginia)'},
    {value: 'us-west-1', viewValue: 'US West (N. California)'},
    {value: 'us-west-2', viewValue: 'US West (Oregon)'},
    {value: 'af-south-1', viewValue: 'Africa (Cape Town)'},
    {value: 'ap-east-1', viewValue: 'Asia Pacific (Hong Kong)'},
    {value: 'ap-south-1', viewValue: 'Asia Pacific (Mumbai)'},
    {value: 'ap-northeast-3', viewValue: 'Asia Pacific (Osaka-Local)'},
    {value: 'ap-northeast-2', viewValue: 'Asia Pacific (Seoul)'},
    {value: 'ap-southeast-1', viewValue: 'Asia Pacific (Singapore)'},
    {value: 'ap-southeast-2', viewValue: 'Asia Pacific (Sydney)'},
    {value: 'ap-northeast-1', viewValue: 'Asia Pacific (Tokyo)'},
    {value: 'ca-central-1', viewValue: 'Canada (Central)'},
    {value: 'eu-central-1', viewValue: 'Europe (Frankfurt)'},
    {value: 'eu-west-1', viewValue: 'Europe (Ireland)'},
    {value: 'eu-west-2', viewValue: 'Europe (London)'},
    {value: 'eu-south-1', viewValue: 'Europe (Milan)'},
    {value: 'eu-west-3', viewValue: 'Europe (Paris)'},
    {value: 'eu-north-1', viewValue: 'Europe (Stockholm)'},
    {value: 'me-south-1', viewValue: 'Middle East (Bahrain)'},
    {value: 'sa-east-1', viewValue: 'South America (São Paulo)'},
    {value: 'all', viewValue: 'All'},
  ];
  export const AzureREGIONS: SelectObject[] = [
    {value: 'us-east-2', viewValue: 'US East (Ohio)'},
    {value: 'all', viewValue: 'All'},
  ];
export const TYPE_PURPOSE: SelectObject[] = [
    {value: 'General Purpose', viewValue: 'General Purpose'},
    {value: 'Compute Optimized', viewValue: 'Compute Optimized'},
    {value: 'Memory Optimized', viewValue: 'Memory Optimized'},
    {value: 'Media Accelerator Instances', viewValue: 'Media Accelerator Instances'},
    {value: 'Storage Optimized', viewValue: 'Storage Optimized'},
    {value: 'GPU instance', viewValue: 'GPU instance'},
    {value: 'all', viewValue: 'All'},
  ];
export const INTERRUPTION_BEHAVIOR: SelectObject[] = [
  {value: 'terminate', viewValue: 'Terminate'},
  {value: 'hibernate', viewValue: 'Hibernate'},
  {value: 'stop', viewValue: 'Stop'}
];

export const STORAGE_TYPES: SelectObject[] = [
  {value: 'gp2', viewValue: 'General Purpose SSD (gp2)'},
  {value: 'gp3', viewValue: 'General Purpose SSD (gp3)'},
  {value: 'io1', viewValue: 'Provisioned IOPS SSD (io1)'},
  {value: 'io2', viewValue: 'Provisioned IOPS SSD (io2)'},
  {value: 'st1', viewValue: 'Throughput Optimized HDD (st1)'},
  {value: 'sc1', viewValue: 'Cold HDD (sc1)'},
  {value: 'magnetic', viewValue: 'Magnetic (previous generation)'},
  {value: 'all', viewValue: 'All'},
];
