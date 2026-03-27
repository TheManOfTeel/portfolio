import { Project } from './project';
import { Experience, Position } from './experience';
import { Skill } from './skill';

describe('Models', () => {
  describe('Project', () => {
    it('should create a project with required parameters', () => {
      const project = new Project('Test Project', '2020-2021', 'A test project');

      expect(project.title).toBe('Test Project');
      expect(project.timeline).toBe('2020-2021');
      expect(project.description).toBe('A test project');
    });

    it('should create a project with optional parameters', () => {
      const project = new Project(
        'Test Project',
        '2020-2021',
        'A test project',
        'Enterprise application',
        'image.png',
        { width: '100px' },
        'test-repo'
      );

      expect(project.subtext).toBe('Enterprise application');
      expect(project.image).toBe('image.png');
      expect(project.imageStyle).toEqual({ width: '100px' });
      expect(project.repository).toBe('test-repo');
    });

    it('should handle undefined optional parameters', () => {
      const project = new Project('Test', '2020', 'Desc');

      expect(project.subtext).toBeUndefined();
      expect(project.image).toBeUndefined();
      expect(project.imageStyle).toBeUndefined();
      expect(project.repository).toBeUndefined();
    });
  });

  describe('Experience', () => {
    it('should create an experience with company and positions', () => {
      const positions = [
        new Position('Developer', '2020-2021', ['Task 1', 'Task 2'])
      ];
      const experience = new Experience('Test Company', positions);

      expect(experience.companyName).toBe('Test Company');
      expect(experience.positions).toBe(positions);
      expect(experience.positions.length).toBe(1);
    });
  });

  describe('Position', () => {
    it('should create a position with title, date, and tasks', () => {
      const tasks = ['Developed features', 'Fixed bugs'];
      const position = new Position('Senior Developer', '2020-2021', tasks);

      expect(position.title).toBe('Senior Developer');
      expect(position.date).toBe('2020-2021');
      expect(position.tasks).toBe(tasks);
      expect(position.tasks.length).toBe(2);
    });
  });

  describe('Skill', () => {
    it('should create a skill with type and skills array', () => {
      const skills = ['JavaScript', 'TypeScript', 'Angular'];
      const skill = new Skill('Frontend', skills);

      expect(skill.type).toBe('Frontend');
      expect(skill.skills).toBe(skills);
      expect(skill.skills.length).toBe(3);
    });
  });
});