import {SelectObject} from './dataClasses';


export const OS: SelectObject[] = [
    {value: 'linux', viewValue: 'Linux'},
    {value: 'windows', viewValue: 'Windows'}
  ];
export const REGIONS: SelectObject[] = [
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
export const TYPE_PURPOSE: SelectObject[] = [
    {value: 'GENERAL_PURPOSE', viewValue: 'General Purpose'},
    {value: 'COMPUTE_OPTIMIZED', viewValue: 'Compute Optimized'},
    {value: 'MEMORY_OPTIMIZED', viewValue: 'Memory Optimized'},
    {value: 'ACCELERATED_COMPUTING', viewValue: 'Accelerated Computing'},
    {value: 'STORAGE_OPTIMIZED', viewValue: 'Storage Optimized'},
    {value: 'ALL', viewValue: 'All'},
  ];
export const INTERRUPTION_BEHAVIOR: SelectObject[] = [
  {value: 'terminate', viewValue: 'Terminate'},
  {value: 'hibernate', viewValue: 'Hibernate'},
  {value: 'stop', viewValue: 'Stop'}
];
