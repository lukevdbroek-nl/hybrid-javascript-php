<?php
require_once __DIR__ . '/../framework/component.php';
class Button extends Component {
    private string $label;
    private string $action;

    public function __construct(string $label, string $action) {
        $this->label = $label;
        $this->action = $action;
        $this->render();
    }

    protected function template(): string {
        ob_start(); ?>
        <button class="update-btn" data-action-click="<?php echo $this->action; ?>"><?php echo $this->label; ?></button>
        <?php return ob_get_clean();
    }
}
