import { ipcRenderer } from 'electron';
import { Observable } from 'rxjs';
import { setActivePage } from 'models/ui/actions';
import { setRunningCommand } from 'models/npm/actions';
import { clearInstallOptions } from 'models/common/actions';
import { setPackagesStart } from '../actions';

const updateCommand = ({
  operationStatus,
  operationPackages,
  operationCommand
}) => ({
  type: setRunningCommand.type,
  payload: {
    operationStatus,
    operationPackages,
    operationCommand
  }
});

const onNpmInstall$ = new Observable(observer => {
  ipcRenderer.removeAllListeners(['npm-install-completed']);

  ipcRenderer.on('npm-install-completed', () => {
    try {
      observer.next(clearInstallOptions());
      observer.next(
        updateCommand({
          operationStatus: 'idle',
          operationCommand: null,
          operationPackages: []
        })
      );

      observer.next(
        setActivePage({
          page: 'packages',
          paused: false
        })
      );

      observer.next(
        setPackagesStart({
          channel: 'npm-list-outdated',
          options: {
            cmd: ['outdated', 'list']
          }
        })
      );

    } catch (error) {
      observer.error(error);
    }
  });

  ipcRenderer.on('npm-install-error', (event, error) => observer.error(error));
});

export default onNpmInstall$;
