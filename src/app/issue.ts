export interface Issue {
    // id: number ;

    comments: Comment[];

    issueNo: number;

    projectid: string;
  
    title: string;
  
    description: string;
  
    priority: 'low' | 'high';
  
    type: 'Feature' | 'Bug' | 'Documentation';
  
    completed?: Date;

    file? :string | null;
  
  }

  export interface Comment {
    name: string;
    assignee: string;
    assignedby:string,
    date: string;
    time: string;
    status: string;
    details: string;
  }
