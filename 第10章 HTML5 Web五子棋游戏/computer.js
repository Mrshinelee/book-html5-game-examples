		var KONG = 0;//��λ��KONG
		var BLACK = 2;//��ɫ����
		var WHITE = 1;//��ɫ����
		var N = 0;//��λ��
		var B = 2;//�к�ɫ���ӣ��˵��壩
		var W = 1;//�а�ɫ���ӣ����Ե��壩
		var S = 3;//��Ҫ���ӵ�λ��
		//����Chess�洢����
		var Chess  =  [	
			//һ�����ӵ����
			[   N,	N,	N,	S,	B ],
			[   B,	S,	N,	N,	N ],
			[   N,	N,	N,	S,	B ],	
			[   N,	B,	S,	N,	N ],		
			[   N,	N,	S,	B,	N ],
			[   N,	N,	B,	S,	N ],
			[   N,	N,	N,	S,	W ],
			[   W,	S,	N,	N,	N ],
			[   N,	N,	N,	S,	W ],	
			[   N,	W,	S,	N,	N ],		
			[   N,	N,	S,	W,	N ],
			[   N,	N,	W,	S,	N ],
			//�������ӵ����
			[ B,	B,	S,	N,	N ],
			[ N,	N,	S,	B,	B ],
			[ B,	S,	B,	N,	N ],
			[ N,	N,	B,	S,	B ],
			[ N,	B,	S,	B,	N ],
			[ N,	B,	B,	S,	N ],
			[ N,	S,	B,	B,	N ],
			[ W,	W,	S,	N,	N ],
			[ N,	N,	S,	W,	W ],
			[ W,	S,	W,	N,	N ],
			[ N,	N,	W,	S,	W ],
			[ N,	W,	S,	W,	N ],
			[ N,	W,	W,	S,	N ],
			[ N,	S,	W,	W,	N ],
			//�������ӵ����
			[N,	S,	B,	B,	B ],
			[B,	B,	B,	S,	N ],
			[N,	B,	B,	B,	S ],	
			[N,	B,	S,	B,	B ],
			[B,	B,	S,	B,	N ],
			[N,	S,	W,	W,	W ],
			[W,	W,	W,	S,	N ],
			[N,	W,	W,	W,	S ],	
			[N,	W,	S,	W,	W ],
			[W,	W,	S,	W,	N ],
			//�ĸ����ӵ����
			[   S, 	B,  B,  B,  B 	],	
			[   B, 	S,  B,  B,  B 	],
			[   B,  B,  S,	B,  B 	],
			[   B,  B,  B, 	S,  B 	],
			[   B,  B,  B,  B,  S 	],
			[   S,  W,  W,  W,  W 	],	
			[   W, 	S,  W,  W,  W 	],
			[   W,  W,  S, 	W,  W 	],
			[   W,  W,  W, 	S,  W 	],
			[   W,  W,  W,  W,  S 	]];
		 var m_nCurCol = -1;//�������һ������λ�õ��к�
		 var m_nCurRow = -1;//�������һ������λ�õ��к�

		function Point(x,y)
		{ 
		   this.x=x;
		   this.y=y;
		}

		//��ȡ��������λ��
		 function GetComputerPos()//Point
	        {
			return  new Point(m_nCurCol,m_nCurRow);
		}
		//���Ե����룬����gridΪ���̸���
		 function Input(grid){//grid��Array
			var rowSel,colSel,nLevel;
			var index,nLevel;
			var j;
			m_nCurCol = -1;//�洢��ʱ��ѡ��λ��
			m_nCurRow = -1;
			nLevel = -1;//�洢��ʱѡ������׼���
			var bFind;//�Ƿ�������׵ı�־
			for (var row = 0; row < 15; row ++)
			{//�������̵�������
				for (var col = 0; col < 15; col ++)
				{//�������̵�������
					for (var i = Chess.length - 1; i >= 0; i --)
					{//�������м��������
					//�鿴�ӵ�ǰ���ӿ�ʼ�ĺ�����������Ƿ���ϸü��������
						if ( col + 4 < 15 )
						{
							rowSel = -1;
							colSel = -1;
							bFind = true;
							for ( j = 0; j < 5; j ++)
							{
								index = grid[col + j][row];
								if ( index == KONG )
								{//�����λ��û�����ӣ���Ӧ������λ����ֻ����S��N
									if (Chess[i][j] == S)
									{//�����S���򱣴�λ��
										rowSel = row;
										colSel = col + j;
									}
									else if ( Chess[i][j] != N )
									{//����SҲ����N���򲻷���������ף�����ѭ��
										bFind = false;
										break;
									}
								}
								if ( index == BLACK && Chess[i][j] != B )
								{//����Ǻ�ɫ�壬��Ӧ������λ����Ӧ��B���������ѭ��
									bFind = false;
									break;
								}
								if ( index == WHITE && Chess[i][j] != W )
								{//����ǰ�ɫ�壬��Ӧ������λ����Ӧ��W���������ѭ��
									bFind = false;
									break;
								}
							}
							if ( bFind && i > nLevel )
							{//������ϴ����ף��Ҹ����ױ��ϴ��ҵ����׵ļ����
								nLevel = i;//���漶��
								m_nCurCol = colSel;//����λ��
								m_nCurRow = rowSel;
								break;//�����������������
							}
						}

						//�鿴�ӵ�ǰ���ӿ�ʼ��������������Ƿ���ϸü��������
						if ( row + 4 < 15 )
						{
							rowSel = -1;
							colSel = -1;
							bFind = true;
							for (j = 0; j < 5; j ++)
							{
								index = grid[col][row + j];
								if ( index == KONG )
								{//�����λ��û�����ӣ���Ӧ������λ����ֻ����S��N
									if (Chess[i][j] == S)
									{//�����S���򱣴�λ��
										rowSel = row + j;
										colSel = col;
									}
									else if ( Chess[i][j] != N )
									{//����SҲ����N���򲻷���������ף�����ѭ��
										bFind = false;
										break;
									}
								}
								if ( index == BLACK )
								{//����Ǻ�ɫ�壬��Ӧ������λ����Ӧ��B���������ѭ��
									if (Chess[i][j] != B)
									{
										bFind = false;
										break;
									}
								}
								if ( index == WHITE && Chess[i][j] != W )
								{//����ǰ�ɫ�壬��Ӧ������λ����Ӧ��W���������ѭ��
									bFind = false;
									break;
								}
							}
							if ( bFind && i > nLevel )
							{//������ϴ����ף��Ҹ����ױ��ϴ��ҵ����׵ļ����
								nLevel = i;//���漶��
								m_nCurCol = colSel;//����λ��
								m_nCurRow = rowSel;
								break;//�����������������
							}
						}

						//�鿴�ӵ�ǰ���ӿ�ʼ��б45�����µ���������Ƿ���ϸü��������
						if ( col - 4 >= 0 && row + 4 < 15 )
						{
							rowSel = -1;
							colSel = -1;
							bFind = true;
							for (j = 0; j < 5; j ++)
							{
								index = grid[col - j][row + j];
								if ( index == KONG )
								{//�����λ��û�����ӣ���Ӧ������λ����ֻ����S��N
									if (Chess[i][j] == S)
									{//�����S���򱣴�λ��
										rowSel = row + j;
										colSel = col - j;
									}
									else if ( Chess[i][j] != N )
									{//����SҲ����N���򲻷���������ף�����ѭ��
										bFind = false;
										break;
									}
								}
								if ( index == BLACK && Chess[i][j] != B )
								{//����Ǻ�ɫ�壬��Ӧ������λ����Ӧ��B���������ѭ��
									bFind = false;
									break;
								}
								if ( index == WHITE && Chess[i][j] != W )
								{//����ǰ�ɫ�壬��Ӧ������λ����Ӧ��W���������ѭ��
									bFind = false;
									break;
								}
							}
							if ( bFind && i > nLevel )
							{//������ϴ����ף��Ҹ����ױ��ϴ��ҵ����׵ļ����
								nLevel = i;//���漶��
								m_nCurCol = colSel;//����λ��
								m_nCurRow = rowSel;
								break;//�����������������
							}
						}

						//б135�ȵ��������
						if ( col + 4 < 15 && row + 4 < 15 )
						{//�鿴�ӵ�ǰ���ӿ�ʼ��б135�����µ���������Ƿ���ϸü��������
							rowSel = -1;
							colSel = -1;
							bFind = true;
							for (j = 0; j < 5; j ++)
							{
								index = grid[col + j][row + j];
								if ( index == KONG )
								{//�����λ��û�����ӣ���Ӧ������λ����ֻ����S��N
									if (Chess[i][j] == S)
									{//�����S���򱣴�λ��
										rowSel = row + j;
										colSel = col + j;
									}
									else if ( Chess[i][j] != N )
									{//����SҲ����N���򲻷���������ף�����ѭ��
										bFind = false;
										break;
									}
								}
								if ( index == BLACK && Chess[i][j] != B )
								{//����Ǻ�ɫ�壬��Ӧ������λ����Ӧ��B���������ѭ��
									bFind = false;
									break;
								}
								if ( index == WHITE && Chess[i][j] != W )
								{//����ǰ�ɫ�壬��Ӧ������λ����Ӧ��W���������ѭ��
									bFind = false;
									break;
								}
							}
							if ( bFind && i > nLevel )
							{//������ϴ����ף��Ҹ����ױ��ϴ��ҵ����׵ļ����
								nLevel = i;//���漶��
								m_nCurCol = colSel;//����λ��
								m_nCurRow = rowSel;
								break;//�����������������
							}
						}
					}
				}
			}
			if ( m_nCurRow != -1 )
			{//���ѡ����һ�����λ��
				grid[m_nCurCol][m_nCurRow]= WHITE ;
				return true;
			}
			//����������׶�������,�������һ����λ��
			while(true)
			{
				var col;
				var row;
				col=int(Math.random()*15);
				row=int(Math.random()*15);
				if (grid[col][row] == KONG)
				{
					grid[col][row] = WHITE ;
					m_nCurCol = col;
					m_nCurRow = row;
					return true;
				}
			}
			return false;
		}
