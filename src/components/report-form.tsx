import { observer } from 'mobx-react-lite';
import formStore from '../stores/FormStore';
import  challengerStore  from '../stores/ChallengerStore';

const ReportForm: React.FC = observer(() => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = formStore.selectedPerson;
        const weight = Number(formStore.weight);
        if ( name === '' || weight === 0) {
            alert('Please select a name and enter a weight to submit the form')
            return;
        }
        // trigger secret key popup
        const secretKey = Number(prompt('Enter the secret key to submit the form'));
        // validate challenger key
        const validation = challengerStore.validateChallenger(name, secretKey);
        console.log(validation);
        if (validation) {
            // Update the challenger data
            challengerStore.updateChallengerData(name, weight);
            console.log(JSON.stringify(challengerStore.ChallengerData));
            formStore.clearForm();
            return;
        }
        
        
        alert('Invalid secret key, please try again!');
        return;
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
            }} >
            <label
            htmlFor="weight"
            style={{ fontSize: '1.5em', color: '#5ad77c' }}
          >
            Report Weight Here:
          </label>
          <input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={formStore.weight} // Bind to MobX store value
            onChange={(e) => formStore.setWeight(e.target.value)} // Update store on input change
            style={{ padding: '10px', width: '200px' }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
            }} >
          <label>
        <input
          type="radio"
          id="option1"
          name="option"
          value="Mom"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'Mom'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        Mom
      </label>
      <label>
        <input
          type="radio"
          id="option2"
          name="option"
          value="Dad"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'Dad'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        Dad
      </label>
      <label>
        <input
          type="radio"
          id="option3"
          name="option"
          value="John"
          style={{ margin: '3px'}}
          checked={formStore.selectedPerson === 'John'}
          onChange={(e) => formStore.setSelectedPerson(e.target.value)} // Update store on radio change
        />
        John
      </label>
      </div>
      <button
        type="submit"
        style={{
          marginBottom: '10px',
          padding: '10px',
          width: '200px',
          alignSelf: 'center', // Center the button
        }}
      >
        Submit
      </button>
          </form>
    );
});

export default ReportForm;