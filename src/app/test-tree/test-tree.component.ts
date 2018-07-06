import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.scss']
})
export class TestTreeComponent implements OnInit {

  nodes: any;
  constructor() { }

  ngOnInit() {
    //this.selectedKeys =
    this.nodes = [
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root2',
        key: '2',
        isExpanded: true,
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
      {
        title: 'root1',
        key: '1',
        isExpanded: true,
        children: [
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          },
          {
            title: 'child1',
            key: '10',
            isExpanded: true,
            children: [
              {
                title: 'child1.1',
                key: '101',
                isChecked: true,
                isExpanded: false,
                children: [
                  {
                    title: 'child1.2',
                    key: '102',
                    isChecked: true
                  },
                  {
                    title: 'child1.1',
                    key: '103',
                    isChecked: true
                  },
                  {
                    title: 'child1.2',
                    key: '104',
                    isChecked: true
                  },
                ]
              },
              {
                title: 'child1.2',
                key: '102',
                isChecked: true,
              },
              {
                title: 'child1.1',
                key: '103',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '104',
                isChecked: true,
                children: [
                  {
                    title: 'child1',
                    key: '10',
                    isExpanded: true,
                    children: [
                      {
                        title: 'child1.1',
                        key: '101',
                        isChecked: true,
                        isExpanded: false,
                        children: [
                          {
                            title: 'child1.2',
                            key: '102',
                            isChecked: true
                          },
                          {
                            title: 'child1.1',
                            key: '103',
                            isChecked: true
                          },
                          {
                            title: 'child1.2',
                            key: '104',
                            isChecked: true
                          },
                        ]
                      },
                      {
                        title: 'child1.2',
                        key: '102',
                        isChecked: true,
                      },
                      {
                        title: 'child1.1',
                        key: '103',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '104',
                        isChecked: true
                      },
                      {
                        title: 'child1.1',
                        key: '105',
                        isChecked: true
                      },
                      {
                        title: 'child1.2',
                        key: '106',
                        isChecked: true, children: [
                          {
                            title: 'child1',
                            key: '10',
                            isExpanded: true,
                            children: [
                              {
                                title: 'child1.1',
                                key: '101',
                                isChecked: true,
                                isExpanded: false,
                                children: [
                                  {
                                    title: 'child1.2',
                                    key: '102',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.1',
                                    key: '103',
                                    isChecked: true
                                  },
                                  {
                                    title: 'child1.2',
                                    key: '104',
                                    isChecked: true
                                  },
                                ]
                              },
                              {
                                title: 'child1.2',
                                key: '102',
                                isChecked: true,
                              },
                              {
                                title: 'child1.1',
                                key: '103',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '104',
                                isChecked: true
                              },
                              {
                                title: 'child1.1',
                                key: '105',
                                isChecked: true
                              },
                              {
                                title: 'child1.2',
                                key: '106',
                                isChecked: true, children: [
                                  {
                                    title: 'child1',
                                    key: '10',
                                    isExpanded: true,
                                    children: [
                                      {
                                        title: 'child1.1',
                                        key: '101',
                                        isChecked: true,
                                        isExpanded: false,
                                        children: [
                                          {
                                            title: 'child1.2',
                                            key: '102',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.1',
                                            key: '103',
                                            isChecked: true
                                          },
                                          {
                                            title: 'child1.2',
                                            key: '104',
                                            isChecked: true
                                          },
                                        ]
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '102',
                                        isChecked: true,
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '103',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '104',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.1',
                                        key: '105',
                                        isChecked: true
                                      },
                                      {
                                        title: 'child1.2',
                                        key: '106',
                                        isChecked: true
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'child1.1',
                key: '105',
                isChecked: true
              },
              {
                title: 'child1.2',
                key: '106',
                isChecked: true
              }
            ]
          }
        ]
      },
    ]
  }

  checkChange(e) {
    // console.log(this.nodes);
    // if (e.children && e.children.length > 0) {

    // } else {
    //  // e.isChecked = !e.isChecked;
    // }
  }
}
